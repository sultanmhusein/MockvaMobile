import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, ScrollView } from "react-native";
import { useAppComponent, useTheme } from "../Contexts";
import Scaffhold from "../components/Scaffhold";
import { profileGet } from "../data/action/profile";
import { connect } from "react-redux";

const MainScreen = (props) => {
    const { navigation, profile, dispatch, credential, accountId, sessionId, } = props;
    const { networkStatus } = useAppComponent();
    const { colors, images, styles } = useTheme();
    
    useEffect(() => {
        getCredential()
    }, [])

    const dummy = [
        {
          id: '01',
          title: 'AllPayment User1',
          totalTransaction: '5',
          totalAmount: '20.000',
          image: 'man'
        },
        {
          id: '02',
          title: 'AllPayment User2',
          totalTransaction: '3',
          totalAmount: '40.000',
          image: 'man2'
        },
        {
          id: '03',
          title: 'AllPayment User3',
          totalTransaction: '1',
          totalAmount: '10.000',
          image: 'man'
        },
      ];

    const getCredential = async () => {
        if (sessionId != null && accountId != null) {
            dispatch(profileGet(sessionId, accountId))
        }
    }


    return (
        <Scaffhold
            isPageCanScroll={false}
            body={
                <View
                    style={{
                        flex: 1,
                        padding: 24,
                        backgroundColor: colors.white
                    }}>
                        <SafeAreaView>
                            <ScrollView>
                    <View style={{ backgroundColor: '', padding: 16 }}>
                      <Text style={{fontWeight: "bold", fontSize: 16}}>Hi,</Text>
                      <Text style={{fontWeight: "bold", fontSize: 16}}>Welcome Back</Text>
                    </View>
                    <View style={{ backgroundColor: '#0280FA', padding: 16, borderRadius: 16, marginVertical: 16 }}>
                    <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
                      <Image source={Images.chip} style={{ width: 40, height: 40 }} />
                          <Text style={{ color: 'white' }}>AllPayment</Text>
                      </View>
                        <View style={{marginVertical: 32, backgroundColor: "green"}} />
                        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <Text style={{ color: 'white', fontSize: 16 }}>1234 - 4567 - 7890</Text>
                          <Text style={{ color: 'white' }}>Rp10.000</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor: "white"}}>
                      <Text style={{fontWeight: "bold", fontSize: 16, marginBottom: 8}}>Overview</Text>
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
                    {/* <View>
                      <Text style={{fontWeight: "bold", fontSize: 16, marginBottom: 8}}>Most Transaction</Text>
                      <FlatList
                        data={dummy}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                          return (
                              <View style={{ backgroundColor: 'white', padding: 8, flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-between', borderRadius: 8, marginBottom: 4 }}>
                              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                              <View style={{ backgroundColor: 'pink', padding: 8 }}>
                                <Image style={{width: 40, height: 40}} source={images[item.image]} />
                                </View>
                                <View style={{marginLeft: 8}}>
                                  <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                                  <Text style={{fontSize: 12}}>Total Transaction {item.totalTransaction}</Text>
                                </View>
                                </View>
                                <View style={{ }}>
                                  <Text style={{}}>{item.totalAmount}</Text>
                                </View>
                              </View>
                          )
                        }}
                      />
                    </View> */}
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
