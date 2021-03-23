import React from "react";
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import { useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { authLogout } from "../data/action/auth";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountScreen = (props) => {
    const { navigation, dispatch } = props;
    const { colors, images, styles } = useTheme();

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
                <View style={{height: '40%', backgroundColor: colors.blue, alignItems: 'center', justifyContent: 'center'}}>
                  <View style={{backgroundColor: colors.white, padding: 16, borderRadius: 24}}>
                    <Image source={images.man} style={{ width: 80, height: 80 }} />
                  </View>
                </View>
                <SafeAreaView>
                  <ScrollView>
                    <View style={{ backgroundColor: colors.lightgray}}>
                      <TouchableOpacity>
                        <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 16, marginBottom: 8 }}>
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="account-edit-outline" size={24} color={colors.blue} />
                            <Text style={{textAlign: 'justify', marginLeft: 12}}>Edit Account</Text>
                          </View>
                          <Icon name="chevron-right" size={20} />
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Icon name="information-outline" size={24} color={colors.blue} />
                            <Text style={{textAlign: 'justify', marginLeft: 12}}>About</Text>
                          </View>
                          <Icon name="chevron-right" size={20} />
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="cellphone-information" size={24} color={colors.blue} />
                            <Text style={{textAlign: 'justify', marginLeft: 12}}>App Version</Text>
                          </View>
                          <Icon name="chevron-right" size={20} />
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 16}}>
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="file-document-outline" size={24} color={colors.blue} />
                            <Text style={{textAlign: 'justify', marginLeft: 12}}>Term And Condition</Text>
                          </View>
                          <Icon name="chevron-right" size={20} />
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 16}}>
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="file-document-outline" size={24} color={colors.blue} />
                            <Text style={{textAlign: 'justify', marginLeft: 12}}>Privacy Policy</Text>
                          </View>
                          <Icon name="chevron-right" size={20} />
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity 
                        onPress={confirmationLogout}>
                        <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 16, marginTop: 8 }}>
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="logout" size={24} color={colors.blue} />
                            <Text style={{textAlign: 'justify', marginLeft: 12}}>Logout</Text>
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

const mapStateToProps = ({ authReducer }) => {
    return {
        sessionId: authReducer._sessionId
    }
}

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);