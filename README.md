# Portfolio Monorepo

This repository is a modern Nx monorepo featuring two main applications:

- **Portfolio**: A personal portfolio site for Ajay Chowdary, showcasing projects, expertise, and contact information.
- **Blog**: (Structure present, implementation details to be added.)

Built with React, Vite, Tailwind CSS, and Nx for scalable, maintainable development.

---

## Features

- **Monorepo**: Manage multiple apps with shared tooling and dependencies.
- **Modern Stack**: React 19, Vite, Tailwind CSS, TypeScript.
- **CI/CD Ready**: Example GitHub Actions workflow for AWS EC2 and ECS deployments.
- **Best Practices**: Linting, formatting, and scalable project structure.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- [Nx CLI](https://nx.dev/)

### Install dependencies

```sh
npm install
```

### Run the Portfolio App

```sh
npx nx serve portfolio
```

### Build for Production

```sh
npx nx build portfolio
```

### Run the Blog App

```sh
npx nx serve blog
```

---

## Project Structure

```
apps/
  portfolio/    # Personal portfolio site
  blog/         # Blog app (template)
```

---

## Deployment

### CI/CD

This repo is ready for automated deployment to AWS:

- **EC2**: Uploads static build to an EC2 instance and restarts Nginx.
- **ECS**: Builds Docker images, pushes to ECR, and updates ECS services.

See `.github/workflows/deploy.yml` for details.

### Docker

Each app includes a production-ready Dockerfile and Nginx config for static hosting.

---

## Technologies Used

- **React 19**
- **Vite**
- **Tailwind CSS**
- **TypeScript**
- **Nx**
- **AWS (EC2, ECS, ECR)**
- **GitHub Actions**

---

## Portfolio App

A showcase of Ajay Chowdary’s work, skills, and contact information.

**Sections:**
- About Me
- Expertise
- Featured Work
- Code & Principles
- Contact

**Live Demo:** _[Add link if deployed]_
**Contact:** ajaychowdary8192@gmail.com

---

## Blog App

A template for a future blog.  
_Implementation details to be added._

---

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## License

MIT

---

## Author

Ajay Chowdary  
[LinkedIn](https://linkedin.com/in/ajay-chowdary-8192n) | [GitHub](https://github.com/ajay-8192)
