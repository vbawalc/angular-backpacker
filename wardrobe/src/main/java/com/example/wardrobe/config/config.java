package com.example.wardrobe.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class config {
    private String frontendURL ="https://localhost:4200/";
    @Bean
    public WebMvcConfigurer corseConfig(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins(frontendURL)
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
            }
        };

    }
}
