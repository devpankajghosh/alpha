import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    image: require("../assets/images/doctor-3.png"),
    title: "Find Trusted Doctors",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.",
  },
  {
    id: 2,
    image: require("../assets/images/doctor-profile.png"),
    title: "Choose Best Doctors",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.",
  },
  {
    id: 3,
    image: require("../assets/images/doctor-2.png"),
    title: "Easy Appointments",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.",
  },
];

export default function Onboarding() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      router.push("/sign-in");
    }
  };

  const handleSkip = () => {
    router.push("/sign-in");
  };

  return (
    <View style={styles.container}>
      {/* Skip button */}
      {currentSlideIndex < slides.length - 1 && (
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}

      {/* Image */}
      <Image source={slides[currentSlideIndex].image} style={styles.image} />

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{slides[currentSlideIndex].title}</Text>
        <Text style={styles.description}>
          {slides[currentSlideIndex].description}
        </Text>

        {/* Indicators */}
        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === currentSlideIndex && styles.activeIndicator,
              ]}
            />
          ))}
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentSlideIndex === slides.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  skipButton: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1,
  },
  skipText: {
    fontSize: 16,
    color: "#008DB9",
    fontWeight: "500",
  },
  image: {
    width,
    height: width,
    resizeMode: "contain",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#008DB9",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0F4F8",
    marginHorizontal: 4,
  },
  activeIndicator: {
    width: 20,
    backgroundColor: "#008DB9",
  },
  button: {
    backgroundColor: "#008DB9",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
