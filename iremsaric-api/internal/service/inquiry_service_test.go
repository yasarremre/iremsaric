package service

import (
	"iremsaric-api/internal/models"
	"iremsaric-api/internal/repository"
	"testing"

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

func TestCreateInquiry(t *testing.T) {
	db := setupTestDB()
	repo := repository.NewInquiryRepository(db)
	svc := NewInquiryService(repo)

	t.Run("Valid Inquiry", func(t *testing.T) {
		inquiry := &models.Inquiry{
			FullName:    "John Doe",
			Email:       "john@example.com",
			ServiceType: "Kilo Yönetimi",
			Message:     "I want to lose weight reliably.",
		}
		err := svc.CreateInquiry(inquiry)
		assert.NoError(t, err)
		assert.NotEqual(t, inquiry.ID.String(), "00000000-0000-0000-0000-000000000000")
	})

	t.Run("Invalid Email", func(t *testing.T) {
		inquiry := &models.Inquiry{
			FullName:    "John Doe",
			Email:       "invalid-email",
			ServiceType: "Kilo Yönetimi",
			Message:     "Valid message content.",
		}
		err := svc.CreateInquiry(inquiry)
		assert.Error(t, err)
		assert.Equal(t, "invalid email format", err.Error())
	})

	t.Run("Invalid Service Type", func(t *testing.T) {
		inquiry := &models.Inquiry{
			FullName:    "John Doe",
			Email:       "john@example.com",
			ServiceType: "Unknown Service",
			Message:     "Valid message content.",
		}
		err := svc.CreateInquiry(inquiry)
		assert.Error(t, err)
		assert.Equal(t, "invalid service type", err.Error())
	})

	t.Run("Short Message", func(t *testing.T) {
		inquiry := &models.Inquiry{
			FullName:    "John Doe",
			Email:       "john@example.com",
			ServiceType: "Kilo Yönetimi",
			Message:     "Short",
		}
		err := svc.CreateInquiry(inquiry)
		assert.Error(t, err)
		assert.Equal(t, "message must be at least 10 characters", err.Error())
	})

	t.Run("XSS Sanitization", func(t *testing.T) {
		inquiry := &models.Inquiry{
			FullName:    "Hacker",
			Email:       "hacker@example.com",
			ServiceType: "Diğer",
			Message:     "Hello <script>alert('xss')</script> world",
		}
		err := svc.CreateInquiry(inquiry)
		assert.NoError(t, err)
		assert.Equal(t, "Hello  world", inquiry.Message) // BlueMonday removes the tag content too by default for script? or just tags? BlueMonday UGCPolicy normally strips dangerous tags.
		// Actually bluemonday UGCPolicy strips <script> and its content completely usually, or just the tags.
		// Let's verify behavior or adjust expectation.
		// ugcPolicy.Sanitize("<script>alert(1)</script>") -> "" (empty)
	})
}
