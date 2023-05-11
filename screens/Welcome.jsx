import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "../components/CustomStatusBar";
import {images} from "../constants";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
       {/* Welcome Page UI Design  */}
      <CustomStatusBar />
      <ScrollView showsVerticalScrollIndicator={false}
      >
        <View style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}> Suru</Text>
            <Text style={styles.subtitle}>Food for all online</Text>
            
          </View>

          <View style={styles.heroWrapper}>
            {/* this is for the hero image */}
            <View style={styles.imageWrapper}>
              <Image
                style={styles.imag}
                resizeMode="contain"
                source={images.welcome}
              />
              
            </View>
            <Text style={styles.heroDescWrapper}>
              <Text style={styles.heroTitle}>Relax and Shop from </Text>
              <Text style={styles.heroKeyword}>Suru</Text>
            </Text>
            <Text style={styles.heroPar}>
              {" "}
              Shop online and get grocories delivered from stores to your home
              in as fast as 1 hour.
            </Text>
           
          </View>
        <View style={styles.bottomWrapper}>
            <TouchableOpacity
            activeOpacity={0.8}
              style={styles.btnPrimaryWrapper}
              onPress={() => navigation.navigate("SignUp", { name: "signup" })}
            >
              <Text style={styles.btnPrimary}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Login', {name: 'Log In'})} style={styles.btnSecondaryWrapper}>
              <Text onPress={() => navigation.navigate('Login', {name: 'Log In'})} style={styles.btnSecondary}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  wrapper: {
    marginTop: 5,
  },
  bottomWrapper: {
    width: '100%',
    idth: 390,
    marginTop: 30,
    width: '100%',
    justifyContent: "flex-start",
  },
  titleWrapper: {
    marginBottom: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "600",
    padding: 0,
    color: "#000",
    lineHeight: 62,
    margin: 0,
  },
  subtitle: {
    paddingBottom: 0,
    fontSize: 16,
    color: "#000",
    fontWeight: "400",
  },
  heroWrapper: {
    alignItems: "center",
  },
  heroDescWrapper: {
    flexDirection: "row",
    marginBottom: 14,
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: 160,
    alignItems: "center",
    fontSize: 22,
    textAlign: "center",
  },
  heroKeyword: {
    fontSize: 30,
    fontWeight: "600",
  },
  heroTitle: {
    lineHeight: 28,
    margin: 0,
    padding: 0,
  },
  imageWrapper: {
    maxWidth: 280,
    alignSelf: "center",
    width: "100%",
  },
  imag: {
    maxWidth: "100%",
  },
  heroPar: {
    maxWidth: 250,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
  },
  btnPrimaryWrapper: {
    backgroundColor: "#2A4905",
    borderRadius: 30,
    paddingVertical: 10,
    width: '100%',
    width: '100%',
    marginBottom: 10,
  },
  btnSecondaryWrapper: {
    borderRadius: 10,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#2A4905",
    paddingHorizontal: 12,
  },
  btnPrimary: {
    borderRadius: 30,
    alignSelf: "center",
    color: "#fff",
    fontSize: 24,
  },
  btnSecondary: {
    color: "#2A4905",
    fontSize: 24,
    alignSelf: "center",
    justifyContent: "center",
  },
});
