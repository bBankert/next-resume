import { ValueOf } from "next/dist/shared/lib/constants";

export const ICON_CONSTANTS = {
    reactNative: 'react-native',
    react: 'react',
    redux: 'redux',
    node: 'node.js',
    aws: 'aws',
    mongoDb: 'mongo-db',
    jest: 'jest',
    sass: 'sass',
    dotNet: '.net',
    angular: 'angular',
    sqlServer: 'sql-server',
    nextJs: 'next.js',
    docker: 'docker',
    sitecore: 'sitecore'
} as const;

export type TechNologyValues = ValueOf<typeof ICON_CONSTANTS>;