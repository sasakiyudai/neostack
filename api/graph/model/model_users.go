package model

type GormUser struct {
	ID    string `json:"id" gorm:"type:varchar(255);primary_key"`
	Name  string `json:"name gorm:"type:varchar(100);not null"`
	Email string `json:"email gorm:"type:varchar(100);not null"`
	Password string `json:"password gorm:"type:varchar(100);not null"`
}
