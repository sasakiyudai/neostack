package service

import (
	"context"
	"neostack/config"
	"neostack/graph/model"
	"neostack/tools"
	"strings"

	"github.com/google/uuid"
)

func UserCreate(ctx context.Context, input model.NewUser) (*model.GormUser, error) {
	db := config.GetDB()

	input.Password = tools.HashPassword(input.Password)

	user := model.GormUser{
		ID:       uuid.New().String(),
		Name:     input.Name,
		Email:    strings.ToLower(input.Email),
		Password: input.Password,
	}

	if err := db.Model(user).Create(&user).Error; err != nil {
		return nil, err
	}

	return &user, nil
}

func UserGetByID(ctx context.Context, id string) (*model.GormUser, error) {
	db := config.GetDB()

	var user model.GormUser
	if err := db.Model(user).Where("id = ?", id).Take(&user).Error; err != nil {
		return nil, err
	}

	return &user, nil
}

func UserGetByEmail(ctx context.Context, email string) (*model.GormUser, error) {
	db := config.GetDB()

	var user model.GormUser
	if err := db.Model(user).Where("email LIKE ?", email).Take(&user).Error; err != nil {
		return nil, err
	}

	return &user, nil
}