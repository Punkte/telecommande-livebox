export const getUrl = (ip, keycode, mode = 0) => `http://${ip}:8080/remoteControl/cmd?operation=01&key=${keycode}&mode=${mode}`
export const sendRequest = async (url) => {
  await fetch(url)
}
