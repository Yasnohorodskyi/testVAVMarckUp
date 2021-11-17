const FourthBlock = {
  data() {
    return {
      personsData: [
        {
          "title": "Lorem Ipsum is simply dummy text",
          "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          "arguments":["Lorem Ipsum has been the industry's", "Standard dummy text ever since", "But also the leap into electronic typesetting"]
        },
        {
          "title": "Lorem Ipsum is simply dummy text",
          "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          "arguments":["Lorem Ipsum has been the industry's", "Standard dummy text ever since", "But also the leap into electronic typesetting", "It was popularised in the 1960s"]
        },
        {
          "title": "Lorem Ipsum is simply dummy text",
          "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          "arguments":["Lorem Ipsum has been the industry's", "But also the leap into electronic typesetting"]
        },
        {
          "title": "Lorem Ipsum simply",
          "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          "arguments":["Lorem Ipsum has been the industry's", "Standard dummy text ever since", "But also the leap into electronic typesetting"]
        },
        {
          "title": "Lorem Ipsum simply",
          "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          "arguments":["Lorem Ipsum has been the industry's", "Standard dummy text ever since", "But also the leap into electronic typesetting"]
        }
      ],
    }
  },
  computed: {
    personsDataSchuffled() {
     return this.personsData.sort(() => Math.random() - 0.5);
    },
  },
}

Vue.createApp(FourthBlock).mount("#fourth-block")
