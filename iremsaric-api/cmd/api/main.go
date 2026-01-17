package main

import (
	"iremsaric-api/internal/handlers"
	"iremsaric-api/internal/models"
	"iremsaric-api/internal/repository"
	"iremsaric-api/internal/service"
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/glebarez/sqlite"
	"gorm.io/gorm"
)

func main() {
	// 1. Database Setup (Singleton)
	db, err := gorm.Open(sqlite.Open("iremsaric.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	// 2. Migration
	if err := db.AutoMigrate(&models.Inquiry{}); err != nil {
		log.Fatal("Failed to migrate database:", err)
	}

	// 3. Dependency Injection
	inquiryRepo := repository.NewInquiryRepository(db)
	inquiryService := service.NewInquiryService(inquiryRepo)
	inquiryHandler := handlers.NewInquiryHandler(inquiryService)

	// 4. Router Setup
	r := gin.Default()

	// 5. Middleware (CORS)
	// 5. Middleware (CORS)
	r.Use(func(c *gin.Context) {
		clientOrigin := c.Request.Header.Get("Origin")
		allowedOrigin := os.Getenv("ALLOWED_ORIGIN")

		// Dynamic CORS: Allow requests from the specific allowed origin OR any Cloudflare Pages preview/production URL
		if clientOrigin == allowedOrigin ||
			(len(clientOrigin) > 10 && clientOrigin[len(clientOrigin)-10:] == ".pages.dev") ||
			clientOrigin == "http://localhost:3000" {
			c.Writer.Header().Set("Access-Control-Allow-Origin", clientOrigin)
		} else {
			// Fallback to configured origin (or localhost) to fail safely but possibly allow simple GETs if browser permits (unlikely for POST)
			if allowedOrigin == "" {
				allowedOrigin = "http://localhost:3000"
			}
			c.Writer.Header().Set("Access-Control-Allow-Origin", allowedOrigin)
		}

		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With, X-API-KEY")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	// 6. Routes
	api := r.Group("/api")
	{
		api.GET("/health", func(c *gin.Context) {
			c.JSON(200, gin.H{"status": "up", "uptime": "ok"})
		})
		api.POST("/inquiry", inquiryHandler.CreateInquiry)
		api.GET("/admin/inquiries", inquiryHandler.GetInquiries)
	}

	// 7. Run
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	r.Run(":" + port)
}
