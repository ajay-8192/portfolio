const CodePrinciples = () => {
    return (
        <section id="code-and-principles" className="backdrop-blur-lg saturate-100 bg-[#f65f62bf] text-black text-2xl">
            <div className="max-w-screen-2xl w-full mx-auto py-10 px-6 md:py-14 md:px-16 xl:px-32 space-y-8">
                <h2 className="text-xl font-medium">CODE & PRINCIPLES</h2>
                <p className="font-medium text-4xl">Beyond the Interface: Delving into Technical Excellence</p>
                <p>
                    My projects are built on a foundation of clean code, modular architecture, and a strong emphasis on performance and security. Here’s a glimpse into my technical approach and code samples.
                </p>

                <div className="grid grid-cols-1 gap-y-6">
                    <div className="space-y-4">
                        <h3 className="font-medium">Frontend Component Snippets</h3>

                        <pre className="bg-[#e95255ff] p-4 rounded-lg overflow-x-auto">
                            <code className="whitespace-pre text-base">
{`import React from 'react';

export type CaptionProps = {
children: React.ReactNode | string;
variant: 'primary' | 'secondary' | 'tertiary';
customClass?: string;
};

const Caption: React.FC<CaptionProps> = ({ children, variant, customClass }) => {

const variantStyles: Record<CaptionProps['variant'], string> = {
    primary: 'text-16',
    secondary: 'text-14',
    tertiary: 'text-12'
};

const captionClass = \`\${variantStyles[variant]} leading-3/2 \${customClass}\`

return (
    <div className={captionClass}>
    {children}
    </div>
);
};

export default Caption;
`}
                            </code>
                        </pre>
                        <p>Demonstrates a clean, reusable React component adhering to best practices.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-medium">Backend API Endpoint</h3>

                        <pre className="bg-[#e95255ff] p-4 rounded-lg overflow-x-auto">
                            <code className="whitespace-pre text-base">
{`protectedRoutes := routeGroup.Group("/v1", userHandler.UserMiddleware(redisClient))
{
    userRoutes := protectedRoutes.Group("/user")
    {
        userRoutes.GET("/me", userHandler.GetProfileDetails)
        userRoutes.GET("/search", userHandler.SearchUser)
    }
    orgRoutes := protectedRoutes.Group("/org")
    {
        orgRoutes.GET("", chathandler.GetOrganisations)
        orgRoutes.POST("/create", chathandler.CreateOrganisation)
    }
    chatRoutes := protectedRoutes.Group("/:orgId")
    {
        chatRoutes.GET("", chathandler.GetConversationsByOrgId)
        chatRoutes.POST("/create",)
    }
}
`}
                            </code>
                        </pre>
                        <p>Illustrates a secure API endpoint with token-based authentication.</p>
                    </div>
                </div>
                <p>
                    I also focus on performance optimisation techniques like lazy loading and code splitting to ensure optimal user experience. All projects are well-documented and available on GitHub for detailed review.
                </p>
            </div>
        </section>
    )
};

export default CodePrinciples;
