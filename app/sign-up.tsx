import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Account</Text>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Full Name"
            autoCapitalize="words"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Enter Your Password"
              secureTextEntry
            />
            <TouchableOpacity style={styles.eyeIcon}>
              <FontAwesome name="eye" size={20} color="#008DB9" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Phone Number"
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OR</Text>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={24} color="#1877F2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={24} color="#DB4437" />
          </TouchableOpacity>
        </View>

        <View style={styles.signInContainer}>
          <Text style={styles.accountText}>Don't have an account? </Text>
          <Link href="/sign-in" style={styles.signInLink}>
            Sign In
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#008DB9",
    marginBottom: 30,
  },
  form: {
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    backgroundColor: "transparent",
  },
  eyeIcon: {
    padding: 15,
  },
  signUpButton: {
    backgroundColor: "#008DB9",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  signUpText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  orText: {
    textAlign: "center",
    color: "#666",
    fontSize: 16,
    marginVertical: 20,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  accountText: {
    color: "#666",
    fontSize: 14,
  },
  signInLink: {
    color: "#008DB9",
    fontSize: 14,
    fontWeight: "600",
  },
});
