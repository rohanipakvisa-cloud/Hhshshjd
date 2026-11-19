import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const stats = [
  { title: "Total Sales", value: "484,810 AFN" },
  { title: "Receivables", value: "484,810 AFN" },
  { title: "Payables", value: "23,000 AFN" },
  { title: "Cash In Hand", value: "1,984,749 AFN" },
];

const recentTransactions = [
  {
    title: "Payment In",
    party: "عزیز جان اشنا",
    amount: "+2,000 AFN",
  },
  {
    title: "Sale #37",
    party: "وکیل احمد",
    amount: "+484,810 AFN",
  },
  {
    title: "Payment In",
    party: "فرید خان",
    amount: "+20,000 AFN",
  },
];

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>BizBook Dashboard</Text>

      <View style={styles.cardGrid}>
        {stats.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardValue}>{item.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>

        {recentTransactions.map((tx, index) => (
          <TouchableOpacity key={index} style={styles.transactionCard}>
            <View>
              <Text style={styles.txTitle}>{tx.title}</Text>
              <Text style={styles.txParty}>{tx.party}</Text>
            </View>

            <Text style={styles.txAmount}>{tx.amount}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Low Stock Alerts</Text>

        <View style={styles.alertCard}>
          <Text style={styles.alertText}>HP Type-C 128 GB</Text>
          <Text style={styles.alertQty}>-64 PCS</Text>
        </View>

        <View style={styles.alertCard}>
          <Text style={styles.alertText}>Arofudes 16 GB</Text>
          <Text style={styles.alertQty}>-37 PCS</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
    padding: 16,
  },

  header: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    color: "#1f2937",
  },

  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 10,
  },

  cardValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#4f46e5",
  },

  section: {
    marginTop: 25,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 14,
    color: "#111827",
  },

  transactionCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  txTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  txParty: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 4,
  },

  txAmount: {
    fontSize: 16,
    fontWeight: "700",
    color: "#16a34a",
  },

  alertCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  alertText: {
    fontSize: 15,
    color: "#111827",
  },

  alertQty: {
    fontSize: 15,
    fontWeight: "700",
    color: "#dc2626",
  },
});
