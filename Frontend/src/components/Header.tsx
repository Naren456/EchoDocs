import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Settings, Share2, User } from "lucide-react-native";

export const Header = () => (
  <View style={styles.header}>
    <View style={styles.left}>
      <Text style={styles.title}>EchoDocs</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Experimental</Text>
      </View>
    </View>
    <View style={styles.right}>
      <TouchableOpacity style={styles.iconBtn}>
        <Share2 size={20} color="#5f6368" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconBtn}>
        <Settings size={20} color="#5f6368" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileBtn}>
        <User size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: 64,
    backgroundColor: "#f8f9fa",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#dadce0",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "400",
    color: "#202124",
    fontFamily: Platform.OS === "ios" ? "Product Sans" : "sans-serif",
  },
  badge: {
    backgroundColor: "#e8f0fe",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: 11,
    color: "#1a73e8",
    fontWeight: "500",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  profileBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#1a73e8",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
});

import { Platform } from "react-native";
