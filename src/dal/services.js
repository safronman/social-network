import axiosInstance from "./../dal/axiosInstance";

export const getDialogs = () => {
    return axiosInstance.get('dialogs')
        .then(res => {
            return res.data
        })
};

export const updateDialogs = (userId) => {
    return axiosInstance.put(`dialogs/${userId}`)
        .then(res => {
            return res.data
        })
};

export const getMessages = (userId) => {
    return axiosInstance.get(`dialogs/${userId}/messages`)
        .then(res => {
            return res.data
        })
};

export const sendMessage = (userId, body) => {
    return axiosInstance.post(`dialogs/${userId}/messages`, {body})
        .then(res => {
            return res.data
        })
};

export const deleteMessage = (messageId) => {
    return axiosInstance.delete(`dialogs/messages/${messageId}`)
        .then(res => {
            return res.data
        })
};

