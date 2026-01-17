package handlers

import (
	"iremsaric-api/internal/models"
	"iremsaric-api/internal/service"
	"net/http"

	"github.com/gin-gonic/gin"
)

type InquiryHandler struct {
	service *service.InquiryService
}

func NewInquiryHandler(service *service.InquiryService) *InquiryHandler {
	return &InquiryHandler{service: service}
}

func (h *InquiryHandler) CreateInquiry(c *gin.Context) {
	var inquiry models.Inquiry
	if err := c.ShouldBindJSON(&inquiry); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.service.CreateInquiry(&inquiry); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Inquiry received", "id": inquiry.ID})
}

func (h *InquiryHandler) GetInquiries(c *gin.Context) {
	// Simple Admin Auth Middleware check (can be moved to router)
	apiKey := c.GetHeader("X-API-KEY")
	// TODO: Move this key to environment variable
	if apiKey != "secret-admin-key" {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	inquiries, err := h.service.GetAllInquiries()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, inquiries)
}
