package service

import (
	"errors"
	"iremsaric-api/internal/models"
	"iremsaric-api/internal/repository"
	"regexp"
	"strings"

	"github.com/microcosm-cc/bluemonday"
)

type InquiryService struct {
	repo *repository.InquiryRepository
}

func NewInquiryService(repo *repository.InquiryRepository) *InquiryService {
	return &InquiryService{repo: repo}
}

var validServiceTypes = map[string]bool{
	"Kilo Yönetimi":          true,
	"Hastalıklarda Beslenme": true,
	"Sporcu Beslenmesi":      true,
	"Diğer":                  true,
}

func (s *InquiryService) CreateInquiry(inquiry *models.Inquiry) error {
	// 1. Validation
	if inquiry.FullName == "" {
		return errors.New("full name is required")
	}
	if inquiry.Email == "" || !isValidEmail(inquiry.Email) {
		return errors.New("invalid email format")
	}
	if !validServiceTypes[inquiry.ServiceType] {
		return errors.New("invalid service type")
	}
	if len(inquiry.Message) < 10 {
		return errors.New("message must be at least 10 characters")
	}

	// 2. Sanitization (XSS)
	p := bluemonday.UGCPolicy()
	inquiry.Message = p.Sanitize(inquiry.Message)

	// 3. Persist
	return s.repo.Create(inquiry)
}

func (s *InquiryService) GetAllInquiries() ([]models.Inquiry, error) {
	return s.repo.GetAll()
}

func isValidEmail(email string) bool {
	// Simple regex for email validation
	regex := `^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$`
	match, _ := regexp.MatchString(regex, strings.ToLower(email))
	return match
}
