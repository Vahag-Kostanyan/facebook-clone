export const CreatePostStyle = () => {
    return {
        blocks: {
            width: "100%",
            backgroundColor: "#ffffff",
            borderRadius: 10,
            boxShadow: "0px 3px 6px #dbdbdb",
            flexDirection: "column",
        },
        secondBlockItem: {
            flex: 6,
            padding: "10px 0",
            alignItems: "center",
            justifyContent: "center",
            color: "#65676B",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "16px",
            _hover: {
                backgroundColor: "#e7e8e9"
            },
            borderRadius: 10,
            gap: "10px"
        }
    }
}