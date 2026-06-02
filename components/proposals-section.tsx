"use client"

export function ProposalsSection() {
  return (
    <section
      id="propostas"
      className="relative overflow-hidden bg-gradient-to-b from-white via-green-50/40 to-yellow-50/50 py-24 lg:py-36"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-400/15 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Cabeçalho */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full border border-green-200 bg-white px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
            Nossa Missão
          </span>

          <h2 className="mt-6 text-4xl font-black text-green-900 sm:text-5xl lg:text-6xl">
            Trabalhar pelas pessoas
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-green-600 to-yellow-400" />
        </div>

        {/* Conteúdo */}
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-green-600 to-yellow-400" />

          <div className="pl-8">
            <p className="text-lg leading-9 text-slate-700 lg:text-xl">
              Lutar por uma sociedade mais justa, humana e inclusiva, onde a
              família seja valorizada, os direitos da população sejam
              respeitados e cada cidadão tenha voz.
            </p>

            <p className="mt-8 text-lg leading-9 text-slate-700 lg:text-xl">
              Defensor da <strong className="text-green-700">liberdade</strong>,
              do <strong className="text-green-700">diálogo</strong> e da
              participação popular, Felipe acredita em uma política feita para o
              povo, ouvindo as necessidades reais das comunidades e trabalhando
              por melhorias que façam diferença na vida das pessoas.
            </p>

            <p className="mt-8 text-lg leading-9 text-slate-700 lg:text-xl">
              Com compromisso, responsabilidade e proximidade com a população,
              sua missão é promover{" "}
              <strong className="text-yellow-600">inclusão</strong>,{" "}
              <strong className="text-yellow-600">oportunidades</strong>,{" "}
              <strong className="text-yellow-600">segurança</strong>, respeito
              às mulheres, proteção animal e mais dignidade para as famílias
              pernambucanas.
            </p>

            <p className="mt-8 text-lg leading-9 text-slate-700 lg:text-xl">
              Felipe acredita que a verdadeira transformação acontece quando o
              povo é ouvido e tratado com respeito.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}