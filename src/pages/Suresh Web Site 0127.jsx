import React, { useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  TextInput,
  Platform,
  useWindowDimensions,
  Linking,
} from "react-native";

/** ===== Theme ===== */
const COLORS = {
  bg: "#0B1220",
  panel: "#0F1A2E",
  panel2: "#0C172B",
  border: "rgba(255,255,255,0.10)",
  text: "rgba(255,255,255,0.92)",
  muted: "rgba(255,255,255,0.70)",
  faint: "rgba(255,255,255,0.55)",
  primary: "#00D4C7",
  white: "#FFFFFF",
  black: "#041316",
};

/** ===== Breakpoints ===== */
function useBP() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1100;
  const isDesktop = width >= 1100;

  return {
    width,
    isMobile,
    isTablet,
    isDesktop,
    maxWidth: isDesktop ? 1120 : 99999,
    px: isDesktop ? 18 : 14,
  };
}

/** ===== UI Blocks ===== */
const Button = ({ label, onPress, variant = "primary", style }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      styles.btn,
      variant === "primary" ? styles.btnPrimary : styles.btnSecondary,
      pressed && { opacity: 0.92, transform: [{ scale: 0.99 }] },
      style,
    ]}
  >
    <Text
      style={[
        styles.btnText,
        variant === "primary"
          ? styles.btnTextPrimary
          : styles.btnTextSecondary,
      ]}
    >
      {label}
    </Text>
  </Pressable>
);

const Pill = ({ text }) => (
  <View style={styles.pill}>
    <Text style={styles.pillText}>{text}</Text>
  </View>
);

const Section = React.forwardRef(({ title, subtitle, children }, ref) => (
  <View ref={ref} style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.h2}>{title}</Text>
      {!!subtitle && <Text style={styles.pMuted}>{subtitle}</Text>}
    </View>
    {children}
  </View>
));

const Card = React.forwardRef(
  ({ title, body, children, style }, ref) => (
    <View ref={ref} style={[styles.card, style]}>
      <Text style={styles.cardTitle}>{title}</Text>
      {!!body && <Text style={styles.pMuted}>{body}</Text>}
      {children}
    </View>
  )
);

const ResponsiveGrid = ({ colsDesktop = 3, bp, children }) => {
  const cols = bp.isMobile ? 1 : bp.isTablet ? 2 : colsDesktop;
  const items = React.Children.toArray(children);

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
      {items.map((child, i) => (
        <View
          key={i}
          style={{
            width: cols === 1 ? "100%" : `${100 / cols}%`,
            minWidth: bp.isMobile ? "100%" : 280,
          }}
        >
          {child}
        </View>
      ))}
    </View>
  );
};

const Field = ({ label, style, ...props }) => (
  <View style={styles.field}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      {...props}
      placeholderTextColor={COLORS.faint}
      style={[styles.input, style]}
    />
  </View>
);

/** ===== App ===== */
export default function App() {
  const bp = useBP();
  const scrollRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const refs = useMemo(
    () => ({
      home: React.createRef(),
      evchargeshare: React.createRef(),
      installation: React.createRef(),
      network: React.createRef(),
      investment: React.createRef(),
      news: React.createRef(),
      rent: React.createRef(),
      preorder: React.createRef(),
    }),
    []
  );

  const scrollTo = (key) => {
    setMenuOpen(false);
    const node = refs[key]?.current;
    if (!node) return;

    if (Platform.OS === "web") {
      node.measureLayout(
        scrollRef.current.getInnerViewNode(),
        (x, y) =>
          scrollRef.current.scrollTo({
            y: Math.max(0, y - 70),
            animated: true,
          }),
        () => {}
      );
    } else {
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    }
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Personal",
    street: "",
    city: "",
    state: "",
    zip: "",
    evType: "",
    comment: "",
  });

  const setField = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <View style={styles.app}>
      <ScrollView ref={scrollRef}>
        <View
          style={{
            width: "100%",
            alignSelf: "center",
            maxWidth: bp.maxWidth,
            paddingHorizontal: bp.px,
          }}
        >
          <Section ref={refs.home} title="Powering the Future of EV Charging">
            <Text style={styles.p}>
              EV Buddy is revolutionizing electrified mobility.
            </Text>
          </Section>

          <Section ref={refs.preorder} title="Pre-Order">
            <ResponsiveGrid colsDesktop={2} bp={bp}>
              <Field
                label="Full Name"
                value={form.name}
                onChangeText={(v) => setField("name", v)}
              />
              <Field
                label="Email"
                value={form.email}
                onChangeText={(v) => setField("email", v)}
              />
              <Field
                label="Comment"
                value={form.comment}
                onChangeText={(v) => setField("comment", v)}
                multiline
                style={{ minHeight: 100 }}
              />
            </ResponsiveGrid>
            <Button
              label="Submit"
              onPress={() => console.log(form)}
              style={{ marginTop: 16 }}
            />
          </Section>

          {/* ===== FOOTER ===== */}
          <View style={styles.footer}>
            <Text style={styles.footerBrand}>EV Buddy</Text>
            <Text style={styles.pMuted}>
              Powering the Future of EV Charging.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

/** ===== Styles ===== */
const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: COLORS.bg },

  h2: { color: COLORS.white, fontSize: 22, fontWeight: "900" },
  p: {
    color: COLORS.muted,
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },
  pMuted: { color: COLORS.faint, marginTop: 6 },

  section: { paddingVertical: 20 },
  sectionHeader: { marginBottom: 10 },

  card: {
    backgroundColor: COLORS.panel,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cardTitle: { color: COLORS.white, fontWeight: "900", fontSize: 16 },

  btn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    alignSelf: "center",
  },
  btnPrimary: { backgroundColor: COLORS.primary },
  btnSecondary: { borderColor: COLORS.border },
  btnText: { fontWeight: "900" },
  btnTextPrimary: { color: COLORS.black },
  btnTextSecondary: { color: COLORS.white },

  pill: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  pillText: { color: COLORS.muted, fontSize: 12 },

  field: { width: "100%" },
  label: { color: COLORS.muted, marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 10,
    color: COLORS.white,
  },

  footer: {
    marginTop: 40,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  footerBrand: {
    color: COLORS.white,
    fontWeight: "900",
    fontSize: 18,
  },
});
