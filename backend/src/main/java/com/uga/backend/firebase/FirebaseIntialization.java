package com.uga.backend.firebase;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import javax.annotation.PostConstruct;

import java.io.File;

import org.springframework.stereotype.Service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;



@Service
public class FirebaseIntialization {
   
    @PostConstruct
    public void initialize() {
        try {
            FileInputStream serviceAccount = new FileInputStream (new File("./serviceAccount.json"));
            FirebaseOptions options = new FirebaseOptions.Builder()
            .setCredentials(GoogleCredentials.fromStream(serviceAccount))
            .build();

            FirebaseApp.initializeApp(options);
        } catch (FileNotFoundException fnfe) {
            System.out.println("Service account file is not found!!!");
            System.exit(1);
        } catch (IOException ioe) {
            System.out.println("Google Credentials cannot be created from the file stream, please check file or credentials");
            System.exit(1);
        }

    }
}
