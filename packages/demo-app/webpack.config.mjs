/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @ts-check

import CopyWebpackPlugin from "copy-webpack-plugin";
import { resolve } from "node:path";
import { cwd } from "node:process";

import { baseConfig } from "@blueprintjs/webpack-build-scripts";

export default Object.assign({}, baseConfig, {
    entry: {
        "demo-app": [
            // environment polyfills
            "dom4",
            "./polyfill.js",
            // bundle entry points
            "./src/index.tsx",
        ],
    },

    output: {
        filename: "[name].js",
        publicPath: "",
        path: resolve(cwd(), "./dist"),
    },

    plugins: baseConfig.plugins.concat([
        new CopyWebpackPlugin({
            patterns: [
                // to: is relative to dist/
                { from: "src/index.html", to: "." },
                { from: "src/assets/favicon.png", to: "assets" },
            ],
        }),
    ]),
});
