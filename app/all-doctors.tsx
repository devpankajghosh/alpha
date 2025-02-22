import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const doctors = [
  {
    id: 1,
    name: "Dr.Pawan",
    image: require("../assets/images/doctor-profile.png"),
    description:
      "Jorem ipsum dolor, consectetur adipiscing elit. Nunc v libero et velit interdum, ac mattis.",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Dr.Wanitha",
    image: require("../assets/images/doctor-2.png"),
    description:
      "Jorem ipsum dolor, consectetur adipiscing elit. Nunc v libero et velit interdum, ac mattis.",
    rating: 5.0,
  },
  {
    id: 3,
    name: "Dr.Udara",
    image: require("../assets/images/doctor-3.png"),
    description:
      "Jorem ipsum dolor, consectetur adipiscing elit. Nunc v libero et velit interdum, ac mattis.",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Dr.Pawan",
    image: require("../assets/images/doctor-profile.png"),
    description:
      "Jorem ipsum dolor, consectetur adipiscing elit. Nunc v libero et velit interdum, ac mattis.",
    rating: 5.0,
  },
];

export default function AllDoctors() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>All Doctors</Text>
        <View style={{ width: 24 }} />
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

      {/* Doctors List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {doctors.map((doctor) => (
          <View key={doctor.id} style={styles.doctorCard}>
            <Image source={doctor.image} style={styles.doctorImage} />
            <View style={styles.doctorInfo}>
              <View style={styles.doctorHeader}>
                <Text style={styles.doctorName}>{doctor.name}</Text>
                <TouchableOpacity>
                  <FontAwesome name="heart-o" size={24} color="#008DB9" />
                </TouchableOpacity>
              </View>
              <Text style={styles.doctorDescription}>{doctor.description}</Text>
              <View style={styles.doctorFooter}>
                <TouchableOpacity style={styles.bookButton}>
                  <Text style={styles.bookButtonText}>Book</Text>
                </TouchableOpacity>
                <View style={styles.rating}>
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <Text style={styles.ratingText}>{doctor.rating}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
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
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#008DB9",
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
  doctorCard: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
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
  doctorHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  doctorFooter: {
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
