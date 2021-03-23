import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";
import { Button } from "react-native-paper";
import { useAppComponent, useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { authLogout } from "../data/action/auth";
import { connect } from "react-redux";

const AccountScreen = (props) => {
    const { navigation, dispatch } = props;
    const { networkStatus } = useAppComponent();
    const { colors, images, styles } = useTheme();
    
    return (
        <Scaffhold 
            isPageCanScroll={false}
            body={
                <View
          style={{
              flex: 1,
              // justifyContent: "center",
              padding: 24,
              backgroundColor: "#F6F6F6"
          }}>
          <SafeAreaView>
            <ScrollView>
            <View style={{ backgroundColor: '#F6F6F6'}}>
              <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 16, marginBottom: 8 }}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={images.man} style={{ width: 20, height: 20 }} />
                  <Text style={{textAlign: 'center', marginLeft: 12}}>About</Text>
                </View>
                <Text>a</Text>
              </View>
              <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={images.man} style={{ width: 20, height: 20 }} />
                  <Text style={{textAlign: 'center', marginLeft: 12}}>TEST</Text>
                </View>
                <Text>a</Text>
              </View>
              <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={images.man} style={{ width: 20, height: 20 }} />
                  <Text style={{textAlign: 'center', marginLeft: 12}}>TEST</Text>
                </View>
                <Text>a</Text>
              </View>
              <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={images.man} style={{ width: 20, height: 20 }} />
                  <Text style={{textAlign: 'center', marginLeft: 12}}>TEST</Text>
                </View>
                <Text>a</Text>
              </View>
              <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 16, marginTop: 8 }}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={images.man} style={{ width: 20, height: 20 }} />
                  <Text style={{textAlign: 'center', marginLeft: 12}}>About</Text>
                </View>
                <Text>a</Text>
              </View>
            </View>
            </ScrollView>
            <Button
                mode="contained"
                color={colors.blue}
                style={{ marginTop: 64 }}
                // loading={isRequesting}
                // disabled={isRequesting || username == '' || password == ''}
                onPress={() => {
                    dispatch(authLogout());
                    navigation.replace('Login');
                }}>
                Logout
            </Button>
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