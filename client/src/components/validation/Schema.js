import * as yup from 'yup'

export default yup.object().shape({
    event_name: yup
        .string(),
    date: yup
        .string(),
    time: yup
        .string(),
    state: yup
        .string(),
    city: yup
        .string(),
    street_address: yup
        .string(),
    zip: yup
        .number(),
    max_attendee: yup
        .number(),
})