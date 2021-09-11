import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerMenu:{
        backgroundColor: '#d2d1eb',
        padding: 11,
        borderRadius: 15,
    },
    headerNotification:{
        padding: 5,
    },
    headerText:{
        fontFamily: 'sans-serif-light',
        fontSize: 25
    },
    pro__imgcontainer:{
        flex:1,
        height: 100,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignSelf:'center'
    },
    pro__image:{
        height: 150,
        width: 150,
        margin: 20,
        alignSelf: 'center',
        borderRadius: 100,
    },
})