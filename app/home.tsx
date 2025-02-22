import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={require("../assets/images/avatar.png")}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.welcomeText}>Hi,Welcome Back,</Text>
            <Text style={styles.userName}>John Doe William</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <FontAwesome name="bell-o" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search a Doctor"
          placeholderTextColor="#666"
        />
        <FontAwesome name="microphone" size={20} color="#666" />
      </View>

      {/* Medical Center Card */}
      <View style={styles.medicalCenterCard}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Medical Center</Text>
          <Text style={styles.cardDescription}>
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>
        </View>
        <Image
          source={require("../assets/images/doctor.png")}
          style={styles.cardImage}
        />
      </View>

      {/* Categories */}
      <View style={styles.categoriesSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity onPress={() => router.push("/all-doctors")}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Denteeth</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Theripist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Surgeon</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* All Doctors */}
      <View style={styles.doctorsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>All Doctors</Text>
          <TouchableOpacity onPress={() => router.push("/all-doctors")}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Doctor Card */}
        <View style={styles.doctorCard}>
          <Image
            source={require("../assets/images/doctor-profile.png")}
            style={styles.doctorImage}
          />
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>Dr.Pawan</Text>
            <Text style={styles.doctorDescription}>
              Lorem ipsum dolor, consectetur adipiscing elit. Nunc v libero et
              velit interdum, ac mattis.
            </Text>
            <View style={styles.doctorCardFooter}>
              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Book</Text>
              </TouchableOpacity>
              <View style={styles.rating}>
                <FontAwesome name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>5.0</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  welcomeText: {
    fontSize: 14,
    color: "#666",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  notificationButton: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  medicalCenterCard: {
    backgroundColor: "#008DB9",
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
    marginBottom: 20,
  },
  cardContent: {
    flex: 1,
    paddingRight: 20,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardDescription: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.8,
  },
  cardImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  categoriesSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAllText: {
    color: "#666",
  },
  categoryButton: {
    backgroundColor: "#E0F4F8",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 12,
  },
  categoryText: {
    color: "#008DB9",
    fontSize: 16,
  },
  doctorsSection: {
    marginBottom: 20,
  },
  doctorCard: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 12,
    gap: 12,
  },
  doctorImage: {
    width: 100,
    height: 120,
    borderRadius: 8,
  },
  doctorInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  doctorDescription: {
    fontSize: 14,
    color: "#666",
    marginVertical: 8,
  },
  doctorCardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bookButton: {
    backgroundColor: "#008DB9",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  bookButtonText: {
    color: "#fff",
    fontWeight: "500",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
