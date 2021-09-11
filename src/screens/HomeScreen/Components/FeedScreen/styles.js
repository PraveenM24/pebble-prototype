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
    moodContainer:{
        flexDirection: 'column',
        backgroundColor: '#7362B5',
        margin: 20,
        marginBottom: 30,
        borderRadius: 10,
    },
    moodHeading:{
        marginHorizontal: 20,
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    moodSubHeading: {
        marginHorizontal: 20,
        marginTop: 3,
        fontFamily: 'sans-serif-light',
        fontSize: 15,
        color: '#fff'        
    },
    moodButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        bottom: -30,
    },
    moodButtons:{
        marginHorizontal: 7,
        padding: 10,
        borderRadius: 999,
        backgroundColor: '#fff'
    },
    moodButtons__img: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    scrollView:{
        marginBottom: 150,
    },
    postsContainer: {
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },
    postContainer: {
        borderRadius: 15,
        backgroundColor: '#fff',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginBottom: 10,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    postHeader__doc:{
        flexDirection: 'column',
    },
    postDocImage: {
        width: 50,
        height: 50,
        borderRadius: 999,
        marginRight: 10,
        marginTop: 5 
    },
    postDescription: {
        marginTop: 15,
        marginBottom: 5,
    },  
    postImage: {
        width: 'auto',
        height: 200,
        resizeMode: 'contain',
        borderRadius: 20
    },
    postLikesContainer:{
        flexDirection: 'row',
        paddingBottom: 5,
        alignItems: 'center',
    },  
})