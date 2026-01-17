package repository

import (
	"iremsaric-api/internal/models"

	"gorm.io/gorm"
)

type InquiryRepository struct {
	db *gorm.DB
}

func NewInquiryRepository(db *gorm.DB) *InquiryRepository {
	return &InquiryRepository{db: db}
}

func (r *InquiryRepository) Create(inquiry *models.Inquiry) error {
	return r.db.Create(inquiry).Error
}

func (r *InquiryRepository) GetAll() ([]models.Inquiry, error) {
	var inquiries []models.Inquiry
	err := r.db.Order("created_at desc").Find(&inquiries).Error
	return inquiries, err
}
