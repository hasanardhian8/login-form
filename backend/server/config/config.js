const config ={
    env:process.env.NODE_ENV || "development",
    port : 3001,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    db_name: process.env.DATABASE || "loginform",
    db_username: process.env.DATABASE_USER || "postgres",
    db_password: process.env.DATABASE_PASSWORD || "25nov11736",
    URL_DOMAIN: "/loginform",
    URL_IMAGE: process.env.URL_IMAGE || "/loginform/images",
    URL_API: "/loginform/api",
}
export default config