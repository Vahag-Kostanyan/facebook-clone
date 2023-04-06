export const ProfileInfoButtonsStyle = () => {
    return {
        buttonStyle: {
            padding: "15px 20px",
            cursor: "pointer",
            borderRadius: 6,
            fontSize: 15,
            color: "#898a8d",
            fontWeight: 600,
            _hover: {
                backgroundColor: "#f0f2f5"
            }
        },
        activeButtonStyle: {
            padding: "15px 20px",
            cursor: "pointer",
            color: "#267ef3",
            fontSize: 15,
            fontWeight: 600,
            borderBottom: "3px solid #1876f2"
        }
    }
}


export const ProfileAboutYouStyle = () => {
    return  {
        blocks: {
            width: "100%",
            backgroundColor: "#ffffff",
            borderRadius: 10,
            boxShadow: "0px 3px 6px #dbdbdb",
            flexDirection: "column",
        },
        middleBlock: {
            flex: 4,
            padding: 1,
            alignItems: "center",
            justifyContent: "center",
            _hover: {
                backgroundColor: "#f0f2f5"
            },
            cursor: "pointer",
            gap: 2
        },

    }
} 