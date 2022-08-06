package main

import (
	"log"

	"github.com/gin-gonic/gin"

	"time"

	"neostack/common"

	"github.com/gin-contrib/cors"
	"gorm.io/gorm"
)

func Migrate(db *gorm.DB) {
}

func main() {
	db := common.Init()
	Migrate(db)

	sqlDB, err := db.DB()
	if err != nil {
		log.Fatalln(err)
	}
	defer sqlDB.Close()

	r := gin.Default()

	// ここからCorsの設定
	r.Use(cors.New(cors.Config{
		// アクセスを許可したいアクセス元
		AllowOrigins: []string{
			"http://localhost:3000",
		},
		// アクセスを許可したいHTTPメソッド(以下の例だとPUTやDELETEはアクセスできません)
		AllowMethods: []string{
			"POST",
			"GET",
			"PUT",
			"DELETE",
			"OPTIONS",
		},
		// 許可したいHTTPリクエストヘッダ
		AllowHeaders: []string{
			"Access-Control-Allow-Credentials",
			"Access-Control-Allow-Headers",
			"Content-Type",
			"Content-Length",
			"Accept-Encoding",
			"Authorization",
		},
		// cookieなどの情報を必要とするかどうか
		AllowCredentials: true,
		// preflightリクエストの結果をキャッシュする時間
		MaxAge: 24 * time.Hour,
	  }))

	// v1 := r.Group("/api")
	// users.UsersRegister(v1.Group("/users"))

	// v1.Use(users.AuthMiddleware(false))
	// users.ProfileAnonymousRegister(v1.Group("/profiles"))
	// articles.ArticlesAnonymousRegister(v1.Group("/articles"))
	// articles.TagsAnonymousRegister(v1.Group("/tags"))
	// webhook.WebhookRegister(v1.Group("/webhooks"))

	// v1.Use(users.AuthMiddleware(true))
	// users.UserRegister(v1.Group("/user"))
	// users.ProfileRegister(v1.Group("/profiles"))
	// articles.ArticlesRegister(v1.Group("/articles"))
	// plans.PlansRegister(v1.Group("/plans"))

	testAuth := r.Group("/api/ping")

	testAuth.GET("", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.Run() // listen and serve on 0.0.0.0:8080
}
