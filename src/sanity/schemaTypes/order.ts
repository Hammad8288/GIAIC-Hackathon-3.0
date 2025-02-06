export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'userId',
            title: 'User ID',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule: any) =>
                Rule.required().email().error("Must be a valid email"),
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string',
            validation: (Rule: any) =>
                Rule.required().min(10).error("Enter a valid phone number"),
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'city',
            title: 'City',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'province',
            title: 'Province/State',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'zip',
            title: 'ZIP/Postal Code',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'country',
            title: 'Country',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'cartItems',
            title: 'Cart Items',
            type: 'array',
            of: [{ type: 'reference' , to: [{ type: 'product' }] }],
        },
        {
            name: 'totalAmount',
            title: 'Total Amount',
            type: 'number',
            validation: (Rule: any) => Rule.required().min(0),
        },
        {
            name: 'paymentMethod',
            title: 'Payment Method',
            type: 'string',
            options: {
                list: [
                    { title: "Cash on Delivery", value: "COD" },
                    { title: "Stripe", value: "Stripe" },
                ],
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'orderDate',
            title: 'Order Date',
            type: 'datetime',
            validation: (Rule: any) => Rule.required(),
        },

        {
            name: 'status',
            title: 'Order Status',
            type: 'string',
            options: {
                list: [
                    { title: "Pending", value: "Pending" },
                    { title: "Processing", value: "Processing" },
                    { title: "Shipped", value: "Shipped" },
                    { title: "Delivered", value: "Delivered" },
                    { title: "Cancelled", value: "Cancelled" },
                ],
                layout: "radio",
            },
            initialvalue: "pending",
            validation: (Rule: any) => Rule.required(),
        },
    ],
};
