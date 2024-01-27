# 🛍️ Codeswear - Next.js E-Commerce Store

Welcome to Codeswear, your go-to destination for modern and stylish apparel! This Next.js-based e-commerce website is designed to provide a seamless shopping experience, offering cutting-edge features for both developers and business owners. Whether you're here to learn or contribute, or you're a business owner seeking a robust e-commerce solution, Codeswear has you covered.

## Key Features:
- 🚀 **Next.js**: Harnessing the power of React and server-side rendering for optimal performance.
- 💡 **Modular Components**: Well-organized and reusable React components for easy customization and maintenance.
- 🎨 **Tailwind CSS**: A utility-first CSS framework for a sleek and responsive design.
- 📦 **State Management with Redux**: Efficient state handling for enhanced data management.
- 🌐 **API Integration**: Seamless connections with external APIs for product data, payments, and more.
- 🛒 **Shopping Cart**: A fully functional shopping cart with a smooth checkout process.
- 💳 **Payment Gateway Integration**: Seamless paytm gateway integration for secure and convenient transactions.
- 🔄 **Database Integration with [Appwrite](https://github.com/appwrite/appwrite)**: Robust backend support for product fetching and management.
- 🔒 **Authentication & Authorization**: Secure user authentication and authorization mechanisms.

## Prerequisites

**Node version 18.7.x**

## Getting Started

### Cloning the Repository

```shell
git clone https://github.com/krishkalaria12/codeswear-modern-ecommerce.git
```

### Install Packages

```shell
npm install
```

### Setup .env.local File

```js
NEXT_PUBLIC_APPWRITE_URL="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT_ID=""
NEXT_PUBLIC_APPWRITE_DATABASE_ID=""
NEXT_PUBLIC_APPWRITE_CAPS_COLLECTION_ID=""
NEXT_PUBLIC_APPWRITE_MUGS_COLLECTION_ID=""
NEXT_PUBLIC_APPWRITE_SWEATSHIRTS_COLLECTION_ID=""
NEXT_PUBLIC_APPWRITE_TSHIRTS_COLLECTION_ID=""
NEXT_PUBLIC_APPWRITE_HOODIES_COLLECTION_ID=""
NEXT_PUBLIC_APPWRITE_BUCKET_ID=""
```

## Available Commands

Running commands with npm `npm run [command]`

| Command         | Description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

## Checkout and Order Pages

Enhance your shopping experience with dedicated checkout and order pages. The seamless integration of Paytm Gateway ensures secure transactions, making your purchasing process quick and reliable.

## Database Management with Appwrite

Utilizing the power of Appwrite for backend support, Codeswear ensures a robust database structure. Products are intelligently categorized based on size and color, providing a dynamic and user-friendly shopping experience.

## Contributing

Contributions are welcome! Feel free to open issues, submit pull requests, or suggest new features. Check out our [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Happy coding and happy selling! 🚀🛒
