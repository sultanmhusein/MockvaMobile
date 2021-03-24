import Colors from "../constants/colors";

export default Styles = {
    accountContainer: {
        flex: 1,
        backgroundColor: Colors.lightgray,
    },
    accountContainerItem: {
        backgroundColor: Colors.white,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
    },
    containerRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    textMedium: {
        fontSize: 16,
        fontFamily: "PoppinsMedium"
    },
    textMediumBig: {
        fontSize: 20,
        fontFamily: "PoppinsMedium"
    },
    textInputFlat: {
        backgroundColor: Colors.white, 
        color: Colors.blue, 
        marginTop: 8
    },
    imageCenter: {
        justifyContent: 'center', 
        alignSelf: "center"
    }
};
