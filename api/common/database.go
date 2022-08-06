package common

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type Database struct {
	*gorm.DB
}

var DB *gorm.DB

// Opening a database and save the reference to `Database` struct.
func Init() *gorm.DB {
	godotenv.Load()

	var db *gorm.DB
	var err error = nil

	db_dsn := fmt.Sprintf("host=%s port=%s user=%s dbname=%s password=%s sslmode=disable TimeZone=Asia/Tokyo",
	os.Getenv("POSTGRES_HOST"),os.Getenv("POSTGRES_PORT"),os.Getenv("POSTGRES_USER"),os.Getenv("POSTGRES_DB"),os.Getenv("POSTGRES_PASSWORD"))

	db, err = gorm.Open(postgres.Open(db_dsn), &gorm.Config{})

	if err != nil {
		fmt.Println("db err: (Init) ", err)
	}
	// db.DB().SetMaxIdleConns(10)
	// db.LogMode(true)
	DB = db
	return DB
}

// Using this function to get a connection, you can create your connection pool here.
func GetDB() *gorm.DB {
	return DB
}
