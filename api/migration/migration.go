package migration

import (
	"neostack/config"
	"neostack/graph/model"
)

func MigrateTable() {
	db := config.GetDB()

	db.AutoMigrate(&model.User{})
}