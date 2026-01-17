package handlers

import (
	"bytes"
	"encoding/json"
	"iremsaric-api/internal/models"
	"iremsaric-api/internal/repository"
	"iremsaric-api/internal/service"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/glebarez/sqlite"
	"github.com/stretchr/testify/assert"
	"gorm.io/gorm"
)

func setupTestDB() *gorm.DB {
	db, err := gorm.Open(sqlite.Open(":memory:"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	db.AutoMigrate(&models.Inquiry{})
	return db
}

func setupRouter() *gin.Engine {
	gin.SetMode(gin.TestMode)
	db := setupTestDB()
	repo := repository.NewInquiryRepository(db)
	svc := service.NewInquiryService(repo)
	handler := NewInquiryHandler(svc)

	r := gin.Default()
	r.POST("/api/inquiry", handler.CreateInquiry)
	r.GET("/api/admin/inquiries", handler.GetInquiries)
	return r
}

func TestCreateInquiryEndpoint(t *testing.T) {
	r := setupRouter()

	t.Run("Success", func(t *testing.T) {
		inquiry := models.Inquiry{
			FullName:    "Jane Doe",
			Email:       "jane@example.com",
			ServiceType: "Sporcu Beslenmesi",
			Message:     "Interested in sports nutrition.",
		}
		body, _ := json.Marshal(inquiry)

		req, _ := http.NewRequest("POST", "/api/inquiry", bytes.NewBuffer(body))
		req.Header.Set("Content-Type", "application/json")
		w := httptest.NewRecorder()
		r.ServeHTTP(w, req)

		assert.Equal(t, http.StatusCreated, w.Code)
		assert.Contains(t, w.Body.String(), "Inquiry received")
	})

	t.Run("ValidationError", func(t *testing.T) {
		inquiry := models.Inquiry{
			FullName: "", // Missing name
			Email:    "jane@example.com",
		}
		body, _ := json.Marshal(inquiry)

		req, _ := http.NewRequest("POST", "/api/inquiry", bytes.NewBuffer(body))
		req.Header.Set("Content-Type", "application/json")
		w := httptest.NewRecorder()
		r.ServeHTTP(w, req)

		assert.Equal(t, http.StatusBadRequest, w.Code)
	})
}

func TestAdminEndpoint(t *testing.T) {
	r := setupRouter()

	t.Run("Unauthorized", func(t *testing.T) {
		req, _ := http.NewRequest("GET", "/api/admin/inquiries", nil)
		w := httptest.NewRecorder()
		r.ServeHTTP(w, req)

		assert.Equal(t, http.StatusUnauthorized, w.Code)
	})

	t.Run("Authorized", func(t *testing.T) {
		req, _ := http.NewRequest("GET", "/api/admin/inquiries", nil)
		req.Header.Set("X-API-KEY", "secret-admin-key")
		w := httptest.NewRecorder()
		r.ServeHTTP(w, req)

		assert.Equal(t, http.StatusOK, w.Code)
	})
}
