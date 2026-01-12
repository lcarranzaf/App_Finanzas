"use client"

import { useEffect, useRef } from "react"

interface DisqusCommentsProps {
  postSlug: string
  postTitle: string
  postUrl: string
}

export function DisqusComments({ postSlug, postTitle, postUrl }: DisqusCommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create unique identifier for this instance
    const instanceId = `disqus-${postSlug}`

    // Set Disqus configuration
    const disqusConfig = `
      var disqus_config = function () {
        this.page.url = '${postUrl}';
        this.page.identifier = '${postSlug}';
        this.page.title = '${postTitle.replace(/'/g, "\\'")}';
        this.callbacks.onReady = [function() {
          console.log('Disqus loaded for: ${postSlug}');
        }];
      };
    `

    // Create script element for config
    const configScript = document.createElement('script')
    configScript.type = 'text/javascript'
    configScript.text = disqusConfig
    configScript.id = `disqus-config-${instanceId}`

    // Remove any existing Disqus scripts and configs
    const existingConfig = document.getElementById(`disqus-config-${instanceId}`)
    const existingScript = document.getElementById('disqus-script')
    if (existingConfig) existingConfig.remove()
    if (existingScript) existingScript.remove()

    // Clear the container
    if (containerRef.current) {
      containerRef.current.innerHTML = '<div id="disqus_thread"></div>'
    }

    // Add config script
    document.head.appendChild(configScript)

    // Load Disqus script with a small delay to ensure config is set
    setTimeout(() => {
      if (!document.getElementById('disqus-script')) {
        const script = document.createElement('script')
        script.src = 'https://finanzaspro.disqus.com/embed.js'
        script.setAttribute('data-timestamp', String(+new Date()))
        script.id = 'disqus-script'
        script.async = true
        document.body.appendChild(script)
      }
    }, 100)

    // Cleanup function
    return () => {
      const configToRemove = document.getElementById(`disqus-config-${instanceId}`)
      if (configToRemove) configToRemove.remove()
    }
  }, [postSlug, postTitle, postUrl])

  return (
    <div ref={containerRef} className="mt-16 pt-8 border-t border-border">
      <h3 className="text-2xl font-bold text-foreground mb-6">Comentarios</h3>
      <div id="disqus_thread"></div>
      <noscript>
        <p className="text-muted-foreground">
          Por favor, habilita JavaScript para ver los <a href="https://disqus.com/?ref_noscript">comentarios impulsados por Disqus</a>.
        </p>
      </noscript>
    </div>
  )
}