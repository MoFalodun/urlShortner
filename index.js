// const validUrl = require('valid-url');
// const { v4: uuid } = require('uuid')
// const generateUUID = () => uuid().split('-')[0];

// const urlArray = []

// const checkIfUrlIsValid = (req, res, next) => {
//     const { url } = req.body;
//     if (validUrl.isUri(url)){
//         next()
//     } else {
//         console.log("Please return a Valid URL");
//     }
// }

// const checkIfIdIsUnique = (req, res, next) => {
//     generatedId = generateUUID
//     if (urlArray.includes(generateUUID)) {
//         // generatedId = generateUUID
//     } else {
//         next();
//     }
// }

// const convertUserUrl = (data) => {
//     const { receivedUrl } = data;
//     return (urlObject [generatedId, receivedUrl, shortUrl])
// }

// // controllers

// const shortenUrl = (req, res ) => {
//     try {
//         const shortUrl = `https://localhost/${id}`
//         newUrl = convertUserUrl({...req.body, shortUrl })
//         res.message(newUrl.shortUrl)
//         res.redirect(newURL.receivedUrl)

//     } catch (error) {
//         console.log(error);
//         res.status(500)
//     }
// }


