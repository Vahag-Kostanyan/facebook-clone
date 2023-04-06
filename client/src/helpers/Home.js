export const homeLeftSideItemArr = () => {
    return  [
        {
            text: "Groups",
            position: "0 -74px",
            route: "/groups",
            url: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/BHDNlEdwMgn.png')"
        },
        {
            text: "Marketplace",
            position: "0px -407px",
            route: "",
            url: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/BHDNlEdwMgn.png')"
        },
        {
            text: "Watch",
            position: "0px -518px",
            route: "",
            url: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/BHDNlEdwMgn.png')"
        },
        {
            text: "Memories",
            position: "0px -444px",
            route: "",
            url: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/BHDNlEdwMgn.png')"
        },
        {
            text: "Saved",
            position: "0px -185px",
            route: "",
            url: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/BHDNlEdwMgn.png')"
        },
        {
            text: "Pages",
            position: "0px -111px",
            route: "",
            url: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/BHDNlEdwMgn.png')"
        },
        {
            text: "Pages",
            position: "0px 0px",
            route: "",
            url: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/yjJFVz39oV-.png')"
        }
    ]
}

export const HomeMiddleSideStyle = () => {
    return {
        center: {
          alignItems: "center",
          justifyContent: "center"
        },
    
        blocks: {
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: 10,
          boxShadow: "0px 3px 6px #dbdbdb",
          flexDirection: "column",
        },
        firstBlockItem: {
          flex: 6,
          padding: "15px 0",
          alignItems: "center",
          justifyContent: "center",
          color: "#65676B",
          fontWeight: 600,
          cursor: "pointer",
          _hover: {
            backgroundColor: "#e7e8e9"
          },
          borderRadius: 10,
          gap: "10px"
        },
        secondBlockItem: {
          flex: 6,
          padding: "10px 0",
          alignItems: "center",
          justifyContent: "center",
          color: "#65676B",
          fontWeight: 600,
          cursor: "pointer",
          fontSize: "14px",
          _hover: {
            backgroundColor: "#e7e8e9"
          },
          borderRadius: 10,
          gap: "10px"
        }
      }
}


