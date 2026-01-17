package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

// Inquiry represents a contact form submission
type Inquiry struct {
	ID          uuid.UUID `gorm:"type:uuid;primary_key;" json:"id"`
	FullName    string    `gorm:"not null" json:"full_name"`
	Email       string    `gorm:"not null" json:"email"`
	Phone       string    `json:"phone"`
	ServiceType string    `gorm:"not null" json:"service_type"`
	Message     string    `gorm:"not null" json:"message"`
	Status      string    `gorm:"default:'Beklemede'" json:"status"`
	CreatedAt   time.Time `json:"created_at"`
}

// BeforeCreate hook to generate UUID
func (i *Inquiry) BeforeCreate(tx *gorm.DB) (err error) {
	if i.ID == uuid.Nil {
		i.ID = uuid.New()
	}
	return
}
