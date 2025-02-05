import { FunctionComponent, useEffect, useState } from 'react'

import classNames from 'classnames'
import CheckCircleIcon from 'mdi-react/CheckCircleIcon'
import ContentCopyIcon from 'mdi-react/ContentCopyIcon'

import { logCodeSnippetCopied } from '../hooks/eventLogger'
import { copy } from '../lib/utils'

interface CodeSnippetProps {
    code: string
    snippetName?: string
    className?: string
}

export const CodeSnippet: FunctionComponent<CodeSnippetProps> = ({ snippetName, code, className }) => {
    const [copied, setCopied] = useState(false)
    const handleCopy = (): void => {
        copy(code)
            .then(() => setCopied(true))
            .catch(() => setCopied(false))

        if (snippetName) {
            logCodeSnippetCopied(snippetName)
        }
    }

    const Icon = copied ? CheckCircleIcon : ContentCopyIcon

    useEffect(() => {
        const resetCopied = setTimeout(() => setCopied(false), 1000)
        return () => clearTimeout(resetCopied)
    }, [copied])

    return (
        <div className={classNames('my-2 flex justify-between rounded-md bg-gray-200 px-2 pt-3 pb-3', className)}>
            <code className="text-left text-xs text-gray-700">{code}</code>

            <Icon size={16} onClick={handleCopy} onKeyDown={handleCopy} role="button" tabIndex={0} />
        </div>
    )
}
