package com.uga.backend;

import static io.r2dbc.spi.ConnectionFactoryOptions.DATABASE;
import static io.r2dbc.spi.ConnectionFactoryOptions.DRIVER;
import static io.r2dbc.spi.ConnectionFactoryOptions.HOST;
import static io.r2dbc.spi.ConnectionFactoryOptions.PASSWORD;
import static io.r2dbc.spi.ConnectionFactoryOptions.PORT;
import static io.r2dbc.spi.ConnectionFactoryOptions.USER;

import io.r2dbc.spi.ConnectionFactories;
import io.r2dbc.spi.ConnectionFactory;
import io.r2dbc.spi.ConnectionFactoryOptions;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.r2dbc.config.AbstractR2dbcConfiguration;
import org.springframework.data.r2dbc.repository.config.EnableR2dbcRepositories;

@Configuration
@EnableR2dbcRepositories
public class DbConfig extends AbstractR2dbcConfiguration {

  @Bean
  public @NotNull ConnectionFactory connectionFactory() {

    // if our app environment is set to prod, build a connection factory with a secret url
    // otherwise, build a connection factory targeting a local postgres db
    return Objects.equals(System.getenv("APP_ENVIRONMENT"), "prod") ?
        ConnectionFactories.get(System.getenv("DATABASE_URL")) :
        ConnectionFactories.get(ConnectionFactoryOptions.builder()
            .option(DRIVER, "postgresql")
            .option(HOST, "localhost")
            .option(PORT, 5432)  // optional, defaults to 5432
            .option(USER, "postgres")
            .option(PASSWORD, "password")
            .option(DATABASE, "marketplace")  // optional
            .build());
  }
}
