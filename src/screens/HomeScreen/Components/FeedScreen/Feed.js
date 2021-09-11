import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles'
import { Icon } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import CryptoJS from 'crypto-js'

export default function Feed({navigation}){
    const [posts, setPosts] = useState([])
    const [JWTtoken, setJWTtoken] = useState('')

    const base64url = (source) => {
        var encodedSource = CryptoJS.enc.Base64.stringify(source)
        encodedSource = encodedSource.replace(/=+$/, '')
        encodedSource = encodedSource.replace(/\+/g, '-')
        encodedSource = encodedSource.replace(/\//g, '_')
        return encodedSource;
    }

    const generateJWT = () => {
        if (JWTtoken === ''){
            const header = {
                "alg": "HS256",
                "typ": "JWT"
            } 
            var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header))
            var encodedHeader = base64url(stringifiedHeader)
            const today = new Date()
            const tempExpiry = Date.parse(new Date(today.getFullYear(), today.getMonth(), today.getDate()+1))
            const expiry = parseInt(tempExpiry.toString().substring(0,tempExpiry.toString().length-3))
            const data = {
                "exp": expiry
            }
            var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data))
            var encodedData = base64url(stringifiedData)
            var token = encodedHeader + "." + encodedData
            var secret = 'SzFtrRM1yq96Ydr6OyOd5U8kQu80RISXyDTBAldSZtCjUnXs8g'
            var signature = CryptoJS.HmacSHA256(token, secret)
            signature = base64url(signature)
            var signedToken = token + "." + signature
            setJWTtoken(signedToken)
        }      
    }

    const fetchDocData = (docID) => {
        var docDetails = {}
        if (JWTtoken == ''){
            generateJWT()
        }else{
            fetch('http://api.pebblewellness.in/doctors/'+docID, {
                headers: {
                    Authorization: 'Bearer ' + JWTtoken
                }
            })
            .then(response => response.json())
            .then(data => {
                docDetails = {
                    name: 'Dr. '+data.basic.first_name + ' ' + data.basic.last_name,
                    education: data.work.education,
                    image: 'https://api.pebblewellness.in/'+data.image
                }
                console.log(docDetails)
            })
            .catch(error => console.log(error))
        }

        if (docDetails != {}){
            return {docDetails: docDetails}
        }
        else{
            fetchDocData(docID)
        }
    }

    const addLike = (postID) => {
        console.log(postID)
        fetch('http://api.pebblewellness.in/posts/'+postID+'/like', {
            method: 'POST',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log(error))
            .finally(() => fetchData())
    }

    const fetchData = () => {
        fetch('http://api.pebblewellness.in/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
            .catch(error => console.log(error))
    }

    useFocusEffect(
        React.useCallback(() => {
            fetchData()
        }, [])
    )

    return(
            <View>
                <View style={styles.header}>
                    <View style={styles.headerMenu}>
                        <Icon
                        type='entypo'
                        name='menu' 
                        color= '#585ce5'/>
                    </View>
                    <Text style={styles.headerText}>Pebble</Text>
                    <View style={styles.headerNotification}>
                        <Icon
                            type='material-community'
                            name='bell' 
                            color= '#585ce5'
                            size={30}/>
                    </View>
                </View>
                <ScrollView style={styles.scrollView}>
                <LinearGradient
                    style={styles.moodContainer}
                    colors={['#7362B5', '#2EAAC9']}
                    start={{x:0, y:1}}
                    end = {{x:1, y:1}}
                >
                    <Text style={styles.moodHeading}>Welcome Back!</Text>
                    <Text style={styles.moodSubHeading}>How are you feeling today?</Text>
                    <View style={styles.moodButtonsContainer}>
                        <TouchableOpacity style={styles.moodButtons} onPress={() => console.log("I'm happy..")}>
                            <Image
                                style={styles.moodButtons__img}
                                source={require('../../../../../assets/moods/happy.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.moodButtons} onPress={() => console.log("I'm ok..")}>
                            <Image
                                style={styles.moodButtons__img}
                                source={require('../../../../../assets/moods/alright.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.moodButtons} onPress={() => console.log("I'm sad..")}>
                            <Image
                                style={styles.moodButtons__img}
                                source={require('../../../../../assets/moods/sad2.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>

                <View style={styles.postsContainer}>
                    {
                        posts.map((post, key) => (
                            <View key={key} style={styles.postContainer}> 
                                <View style={styles.postHeader}>
                                    <Image
                                        style={styles.postDocImage}
                                        source={{uri: post.doctorInfo.image}}
                                    />
                                    <View style={styles.postHeader__Doc}>
                                        <Text style={{fontSize: 16}}>{'Dr. ' + post.doctorInfo.name}</Text>
                                        <Text style={{fontFamily: 'sans-serif-light', fontSize: 12}}>{post.doctorInfo.education}</Text>
                                    </View>
                                    <View style={{flex: 2}}>
                                        <TouchableOpacity>
                                            <Icon
                                                style={{marginLeft: 'auto'}}
                                                type='feather'
                                                name='more-vertical' 
                                                color= '#585ce5'
                                                size={25}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>  
                                {
                                    post.postInfo.description ? (
                                        <Text style={styles.postDescription}>{post.postInfo.description}</Text>
                                    ) : (<></>)
                                }                          
                                {
                                    post.image ? (
                                        <Image
                                            style={styles.postImage}
                                            source={{uri: post.image}}
                                        />
                                    ) : ( <></>)
                                }
                                <View style={styles.postLikesContainer}>
                                    <TouchableOpacity onPress={() => addLike(post._id)}>
                                        <Icon
                                            style={{paddingLeft:3, paddingRight: 5}}
                                            type='material-community'
                                            name='heart-outline' 
                                            color= '#585ce5'
                                            size={26}/>
                                    </TouchableOpacity>
                                    <Text style={{paddingRight: 15, fontFamily: 'sans-serif-light', fontSize:20}}>{post.postLikes}</Text>
                                    <TouchableOpacity>
                                        <Icon
                                            style={{paddingRight: 5}}
                                            type='material-community'
                                            name='comment-text-outline' 
                                            color= '#585ce5'
                                            size={26}/>
                                    </TouchableOpacity>
                                    <Text style={{paddingRight: 10, fontFamily: 'sans-serif-light', fontSize:20}}>{post.postComments.length}</Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}