# Pixly AI - Codebase Review

Based on a thorough review of the codebase, here are the extracted project details structured as requested:

## 1. Project Overview
**Pixly AI** is a modern, AI-powered image editing web application. It allows users to upload images and transform them using AI features such as background removal, generative fill, and smart cropping. The platform includes user authentication, tracks usage limits for free users, and offers a "Pro" subscription with unlimited uploads via Stripe integration.

## 2. Features and Modules
Based on the `src/modules/` directory and `README.md`:
*   **Editor Module**: The core feature containing the image upload zone, the primary and secondary AI tools, job status polling, and a canvas for before/after comparison.
*   **AI Tools**: Remove/Change Background, Generative Fill, AI Edit, Drop Shadow, AI Retouch, Upscale 2x, Generate Variations, and Smart/Face Cropping.
*   **Authentication**: Google OAuth login.
*   **Pricing & Billing**: Integration with Stripe for paid plans. Includes usage tracking limits for free-tier users.
*   **Hero & Features**: Landing page sections explaining the platform's value proposition.

## 3. Tech Stack, Dependencies, and Plugins
*   **Core Framework**: Next.js (v15.5.2, App Router), React (v19.1.0)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS (v4) with `tailwind-merge` and `clsx`
*   **UI Components**: Radix UI primitives wrapped via `shadcn-ui`, Framer Motion (animations), Lucide React (icons)
*   **Database & ORM**: MongoDB integrated via Prisma (`@prisma/client` v6.15.0)
*   **Authentication**: NextAuth.js (`next-auth` v4.24.11)
*   **Payments**: Stripe (`stripe` v18.5.0)
*   **Image Processing & Hosting**: ImageKit (`@imagekit/next`)
*   **Utilities**: `react-hook-form` and `zod` for forms/validation, `sonner` for toast notifications, `file-saver` for image downloads, `date-fns` for date manipulation.

## 4. Architecture Pattern and Folder Structure
The app uses a **Feature-Modular structure** combined with the standard Next.js App Router pattern:
*   `prisma/`: Contains the DB schema (`schema.prisma`).
*   `src/app/`: Next.js App Router (Pages, Layouts, Providers, and API routes like `/api/auth`, `/api/webhooks/stripe`, `/api/usage`).
*   `src/components/`: Reusable, cross-feature UI components divided into `ui/` (shadcn primitives), `navbar/`, `footer/`, and `modals/`.
*   `src/lib/`: Shared utilities, singletons, and configurations (e.g., `auth.ts`, `prisma.ts`, `utils.ts`).
*   `src/modules/`: Feature-specific logic encapsulated in modules (`editor`, `features`, `hero`, `pricing`).

## 5. State Management Approach
*   **Local UI State**: Uses standard React Hooks (`useState`, `useEffect`) within components. The Editor heavily relies on component-level state to track uploaded images, active effects, prompt text, and job polling status.
*   **Session/Global State**: Uses NextAuth's `SessionProvider` (wrapped in `src/app/providers.tsx`) to make user authentication and details (like `usageCount`, `plan`) globally available.
*   *Note*: No external global state management library (like Redux or Zustand) is used.

## 6. Dependency Injection Setup
*   There is no formal Dependency Injection (DI) framework.
*   Singletons for services (like the Prisma client instance) are instantiated and exported from `src/lib/prisma.ts` to ensure reuse across the application.

## 7. API Integration
*   **Endpoints Structure**: API routes are implemented as Next.js Route Handlers in `src/app/api/`.
*   **Networking Flow**: 
    *   Client components use the native `fetch` API for making requests (e.g., polling image processing status via HTTP HEAD requests).
    *   Image processing is primarily handled directly via **ImageKit URL transformations** rather than passing through a custom backend API. The app generates an ImageKit URL with transformation parameters (`tr=...`) and polls it until it returns a success response.
*   **Interceptors**: None observed.

## 8. Database / Local Storage Usage
*   **Database**: **MongoDB**, managed via **Prisma ORM**.
*   **Schema**:
    *   `users`: Stores `email`, `name`, `avatar`, `stripeCustomerId`, `plan` (Free/Paid), `role`, `usageCount`, and `usageLimit`.
    *   `subscriptions`: Links a user to a `stripeSubscriptionId` and `stripeCustomerId`.
*   **Local Storage**: Not heavily utilized outside of what NextAuth manages for cookies/session tokens.

## 9. Authentication Implementation
*   Implemented using **NextAuth.js**.
*   **Providers**: Google Provider (`GoogleProvider`).
*   **Flow**: Custom callbacks (`jwt` and `session`) inject custom fields (plan, usage limits, avatar) into the session token. A helper function `common()` triggers on sign-in to ensure the user exists in the MongoDB database or provisions a new user record.

## 10. Ads / Analytics / Notifications / Remote Config
*   **Analytics/Ads/Remote Config**: No explicit integrations for these were found in the codebase or dependencies (no Google Analytics, Firebase Analytics, or Ad SDKs).
*   **Notifications**: Client-side toast notifications are implemented using `sonner`.

## 11. Key Classes / Files and Responsibilities
*   `src/modules/editor/index.tsx`: The core logic hub for the image editor. Manages state for the uploaded image, generates ImageKit transformation URLs based on selected tools, and implements a polling mechanism (using `fetch(..., { method: "HEAD" })`) to check when ImageKit has finished processing the image.
*   `src/modules/editor/canvas-editor.tsx`: Handles the visual presentation of the image, including the Before/After comparison slider and loading overlays.
*   `src/lib/auth.ts`: Configures NextAuth, defines session callbacks, and handles DB syncing on login.
*   `src/app/api/upload-auth/route.ts`: Generates secure authentication parameters for ImageKit uploads.

## 12. Common Reusable Widgets / Components / Utilities
*   **`src/components/ui/`**: A comprehensive suite of accessible components generated via `shadcn-ui` and Radix UI primitives. Includes components like `Button`, `Dialog`, `Slider`, `DropdownMenu`, `Carousel`, etc.
*   **`src/lib/utils.ts`**: Contains generic utilities like `cn` (combining `clsx` and `tailwind-merge` for conditional styling).

## 13. Error Handling and Logging Strategy
*   **Logging**: Uses standard `console.log()` and `console.error()` for basic backend logging (e.g., catching DB creation errors in `auth.ts` or auth parameter generation errors).
*   **Error Handling**: The UI handles errors gracefully through state. In the Editor, if polling for image processing fails or hits a maximum timeout, the job status is set to "error" and the UI reflects this state accordingly.

## 14. Environment Setup
*   **Config Files**: Uses `.env.local` for sensitive environment variables (Database URLs, NextAuth secrets, Google OAuth credentials, ImageKit keys, and Stripe keys).
*   **Build Settings**: Next.js configured via `next.config.ts`. Tailwind configured via `postcss.config.mjs` and native v4 integrations.
*   **Prisma**: Pre-build step requires running `npx prisma generate` to build the ORM client (configured in `package.json` scripts).
