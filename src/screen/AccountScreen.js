import React from "react";
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import { useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { authLogout } from "../data/action/auth";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountScreen = (props) => {
    const { navigation, dispatch, profile } = props;
    const { colors, images, styles } = useTheme();
  console.log("PROF", profile)
    const confirmationLogout = () => 
      Alert.alert('Logout', "Are you sure want to logout?", [
        {
          text: 'No',
        },
        {
          text: 'Yes',
          onPress: () => {
            dispatch(authLogout());
            navigation.replace('Login');
          },
        },
      ]);
    
    return (
      <Scaffhold 
        isPageCanScroll={false}
        body={
          <View style={styles.accountContainer}>
            <View style={{height: '35%', backgroundColor: colors.blue, alignItems: 'center', justifyContent: 'center'}}>
              <View style={{backgroundColor: colors.white, padding: 8, borderRadius: 8}}>
                <Image source={images.qrCode} style={{ width: 80, height: 80 }} />
              </View>
              <Text style={{color: colors.white, marginVertical: 8}}>{profile != null ? profile.name : ""}</Text>
              <Text style={{color: colors.white}}>{profile != null ? profile.id : ""}</Text>
            </View>
            <SafeAreaView>
              <ScrollView>
                <View style={{ backgroundColor: colors.lightgray}}>
                  <TouchableOpacity>
                    <View style={{ ...styles.accountContainerItem, marginBottom: 8 }}>
                      <View style={styles.containerRow}>
                        <Icon name="account-edit-outline" size={24} color={colors.blue} />
                        <Text style={{marginLeft: 12}}>Edit Account</Text>
                      </View>
                      <Icon name="chevron-right" size={20} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.accountContainerItem}>
                      <View style={styles.containerRow}>
                      <Icon name="information-outline" size={24} color={colors.blue} />
                        <Text style={{marginLeft: 12}}>About</Text>
                      </View>
                      <Icon name="chevron-right" size={20} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.accountContainerItem}>
                      <View style={styles.containerRow}>
                        <Icon name="cellphone-information" size={24} color={colors.blue} />
                        <Text style={{marginLeft: 12}}>App Version</Text>
                      </View>
                      <Icon name="chevron-right" size={20} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.accountContainerItem}>
                      <View style={styles.containerRow}>
                        <Icon name="file-document-outline" size={24} color={colors.blue} />
                        <Text style={{marginLeft: 12}}>Term And Condition</Text>
                      </View>
                      <Icon name="chevron-right" size={20} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.accountContainerItem}>
                      <View style={styles.containerRow}>
                        <Icon name="file-document-outline" size={24} color={colors.blue} />
                        <Text style={{marginLeft: 12}}>Privacy Policy</Text>
                      </View>
                      <Icon name="chevron-right" size={20} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={confirmationLogout}>
                    <View style={{ ...styles.accountContainerItem, marginTop: 8 }}>
                      <View style={styles.containerRow}>
                        <Icon name="logout" size={24} color={colors.blue} />
                        <Text style={{marginLeft: 12}}>Logout</Text>
                      </View>
                      <Icon name="chevron-right" size={20} />
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </SafeAreaView>
          </View>
        }
      />
    )
}

const mapStateToProps = ({ authReducer, profileReducer }) => {
  return {
    sessionId: authReducer.sessionId,
    profile: profileReducer.profile
  }
}

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);