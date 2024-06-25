import React from 'react';
import {
    FeatureCard,
    QuizCard,
} from '../cards';

const Portfolio = () => {
    return (
        <section>
            <div className="flex justify-center">
                <FeatureCard
                    index="01"
                    title="Investment Tracking"
                    text="Track performance beyond return percentage"
                />
                <FeatureCard
                    index="02"
                    title="Net Worth"
                    text="Understand exactly what’s in your portfolio"
                />
                <FeatureCard
                    index="03"
                    title="Reports"
                    text="Get your personal reports ready"
                />

            </div>
            <div>
                <QuizCard />
            </div>
        </section>

    );
};

export default Portfolio;