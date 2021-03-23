import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, ScrollView } from "react-native";
import { useAppComponent, useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { profileGet } from "../data/action/profile";
import { currencyFormat } from "../../constants/helper";
import { connect } from "react-redux";

const MainScreen = (props) => {
    const { navigation, profile, dispatch, credential, accountId, sessionId, } = props;
    const { networkStatus } = useAppComponent();
    const { colors, images, styles } = useTheme();
    
    useEffect(() => {
        getCredential()
    }, [])

    const getCredential = async () => {
        if (sessionId != null && accountId != null) {
            dispatch(profileGet(sessionId, accountId))
        }
    }


    return (
        <Scaffhold
            isPageCanScroll={false}
            body={
              <View style={{ flex: 1, padding: 0, backgroundColor: colors.lightgray }}>
                <SafeAreaView>
                  <ScrollView>
                    <View style={{backgroundColor: 'white', marginBottom: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8}}>
                      <View style={{ marginHorizontal: '2.5%', backgroundColor: colors.white, marginTop: 4 }}>
                        <Text style={{fontSize: 18, fontFamily: "PoppinsMedium"}}>Hello {profile != null ? profile.name : ""}</Text>
                        <Text style={{fontSize: 18, fontFamily: "PoppinsMedium"}}>Welcome Back</Text>
                      </View>
                      <View style={{ backgroundColor: '#0280FA', padding: 16, borderRadius: 16, marginVertical: 8, marginHorizontal: '2.5%' }}>
                        <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
                          <Image source={Images.chip} style={{ width: 40, height: 40 }} />
                          <Text style={{ color: 'white', fontFamily: "PoppinsMedium", fontSize: 16 }}>Mockva</Text>
                        </View>
                        <View style={{marginVertical: 32, backgroundColor: "green"}} />
                        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                          <Text style={{ color: 'white', fontSize: 16, fontFamily: "PoppinsMedium" }}>{profile != null ? profile.id : ""}</Text>
                            <Text style={{ color: 'white', fontFamily: "PoppinsMedium" }}>{profile != null ? currencyFormat(parseInt(profile.balance)) : ""}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={{backgroundColor: "white", borderRadius: 8, paddingVertical: 8}}>
                      <Text style={{fontSize: 16, fontFamily: "PoppinsMedium", marginHorizontal: '2.5%'}}>Overview</Text>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{borderRadius: 8, backgroundColor: "orange", width: '45%', padding: 16, marginHorizontal: "2.5%"}}>
                          <Text style={{color: 'white', fontSize: 12}}>Income</Text>
                          <Text style={{color: 'white'}}>+ Rp2.000</Text>
                        </View>
                        <View style={{borderRadius: 8, backgroundColor: "purple", width: "45%", padding: 16, marginHorizontal: "2.5%"}}>
                          <Text style={{color: 'white', fontSize: 12}}>Spending</Text>
                          <Text style={{color: 'white'}}>- Rp3.000</Text>
                        </View>
                      </View>
                    </View>
                    <View style={{backgroundColor: 'white', marginTop: 8}}>
                      <Text style={{fontSize: 16, marginTop: 8, fontFamily: "PoppinsMedium", marginHorizontal: '2.5%'}}>Most Transaction</Text>
                      <View style={{ backgroundColor: 'white', padding: 8, flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-between', borderRadius: 8, marginBottom: 4 }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <View style={{ backgroundColor: '', padding: 8, borderRadius: 8 }}>
                            <Image style={{width: 40, height: 40}} source={images.man} />
                          </View>
                          <View style={{marginLeft: 8}}>
                            <Text style={{fontWeight: 'bold'}}>Account 1</Text>
                            <Text style={{fontSize: 12}}>Total Transaction</Text>
                          </View>
                        </View>
                        <View style={{ }}>
                          <Text style={{marginRight: 8}}>5</Text>
                        </View>
                      </View>
                      <View style={{ backgroundColor: 'white', padding: 8, flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-between', borderRadius: 8, marginBottom: 4 }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <View style={{ backgroundColor: '', padding: 8, borderRadius: 8 }}>
                            <Image style={{width: 40, height: 40}} source={images.man2} />
                          </View>
                          <View style={{marginLeft: 8}}>
                            <Text style={{fontWeight: 'bold'}}>Account 2</Text>
                            <Text style={{fontSize: 12}}>Total Transaction</Text>
                          </View>
                        </View>
                        <View style={{ }}>
                          <Text style={{marginRight: 8}}>3</Text>
                        </View>
                      </View>
                      <View style={{ backgroundColor: 'white', padding: 8, flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-between', borderRadius: 8, marginBottom: 4 }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <View style={{ backgroundColor: '', padding: 8, borderRadius: 8 }}>
                            <Image style={{width: 40, height: 40}} source={images.man} />
                          </View>
                          <View style={{marginLeft: 8}}>
                            <Text style={{fontWeight: 'bold'}}>Account 3</Text>
                            <Text style={{fontSize: 12}}>Total Transaction</Text>
                          </View>
                        </View>
                        <View style={{ }}>
                          <Text style={{marginRight: 8}}>1</Text>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </SafeAreaView>
              </View>
            }
        />
    );
};

const mapStateToProps = ({ authReducer, profileReducer }) => {
    return {
        credential: authReducer.credential,
        sessionId: authReducer.sessionId,
        accountId: authReducer.accountId,
        profile: profileReducer.profile
    }
}

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
