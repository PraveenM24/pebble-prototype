import { StyleSheet } from 'react-native'

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
    surface: {
        borderRadius: 5,
        padding: 20,
        margin: 10,
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        elevation: 5,
    },
    dep__search: {
        margin: 10
    },
    dep__block: {
        paddingVertical: 8,
    },
    dep__image:{
        width: 35,
        height: 'auto',
        marginRight: 10,
    },
})