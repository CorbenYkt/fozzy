import self from "../img/self.png"
export let colors = ["rgba(166,104,255,1) 36%", "rgba(52,116,193,1) 63%"];
export const info = {
    firstName: "Fozzy",
    about: "a West Highland White Terrier",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🥩',
            text: 'love fresh meat'
        },
        {
            emoji: '🛏️',
            text: 'love to lie on master\'s pillow'
        },
        {
            emoji: "🦮",
            text: "love to walk outside"
        },
        {
            emoji: "🌏",
            text: "I live in the coldest place on Earth (Yakutsk city)"
        }
    ],
    bio: "Yes i'm a dog) I live with my family - Tanya, Dmitrii and Gosha. I enjoy long walks!",
}